import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { IconBadge } from "@/components/icon-badge"
import { LayoutDashboard } from "lucide-react"
import { TitleForm } from "./_components/title-form"
import { DescriptionForm } from "./_components/description-from"

const CourseIdPage = async ({
    params
}: {
    params: { courseId: string }
}) => {
    const { userId } = await auth()
    if(!userId){
        return redirect("/")
    }   

    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        }
    });
    if(!course){
        return redirect("/")
    }

    const requredFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId
    ];

    const totalFields = requredFields.length;
    const compltedFilds = requredFields.filter(Boolean).length;

    const completionText = `(${compltedFilds}/${totalFields})`

    return ( 
        <div className="p-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Course setup
                    </h1>
                    <span className="text-sm text-slate-700">
                        Complete all field {completionText}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                <div className="flex items-center gap-x-2">
                    <IconBadge icon={LayoutDashboard}/>
                 <h2 className="text-xl ">
                        Customize your course
                    </h2>
                    
                </div>
                    <TitleForm
                    initialData={course}
                    courseId={course.id}
                    />

                    <DescriptionForm
                    initialData={course}
                    courseId={course.id}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default CourseIdPage;