import RespondentForm from "../../layouts/forms/RespondentFormsMainContent";
import HeaderLK from "../../layouts/headers/header.lk";
import SidebarPersonal from "../../layouts/sidebars/SidebarPersonal";

export default function FormResearcher(){
    const height = document.documentElement.clientHeight - 85 - 36
    return (
        <div className="wrapper">
            <HeaderLK />
            <div className="main" style={{height: height}}>
                <SidebarPersonal />
                <RespondentForm />
            </div>
        </div>
    )
}