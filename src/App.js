 import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Componets/Header"
import Bodycomponent from "./Componets/Body"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import ConatctUs from "./Componets/ContactUs";
import ErrorRouter from "./Componets/RouterError";
import RestroMenu from "./Componets/RestroMenu";
 
const Grocery=lazy(()=>import("./Componets/Grocery"));
 
const AboutUs=lazy(()=>import("./Componets/AboutUs"));

const AppLevel=()=>{
  return(<div className="app">
<Header/>
<Outlet/>
  </div>);  
}

const appRouter=createBrowserRouter([
  {
    path : "/",
    element : <AppLevel/>,
    errorElement :<ErrorRouter/>,
  children:[
    {
    path : "/",
    element : <Bodycomponent/>
  },
  
  {
    path : "/about",
    element : <Suspense fallback ={<h1>Loading....</h1>}><AboutUs/></Suspense>
  },
  {
    path : "contact",
    element : <ConatctUs/>
  },
  {
    path : "/restro/:id",
    element : <RestroMenu/>
  },
   {
    path : "/grocery",
    element : <Suspense fallback ={<h1>Loading....</h1>}><Grocery/></Suspense>
  }
]}
])
const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);


// const jsxHeading=<h1 className="head">Hello world from jsx </h1>
//  const span =<span id="span">I am inside span</span>

// const HeadingComponent=()=>{
//     const object={
//         Name:"Prathyusha",
//         age : "25"
//     }
//     return(
//         <div>
//         <FooterComponent Name="sravan badithala" age="30 years"/>
//         <FooterComponent Name="Vedanshi badithala" age ="6 months"/>
//         {FooterComponent(object)}
//         <h1>Hell Sravan from Heading Components</h1>
//         </div>
//     );
// }

// const FooterComponent=(props)=>{
//     return(
        
//         <h1>{span}Hello {props.Name} from FooterComponent your age is {props.age}</h1>
//     )
// }


 //   const header1=React.createElement("h1",{id : "heading"},"Hello world from react!");
    
    // header---here header is a react element nothing but java script object 
    // {}---we can place here attribute like id, class
    // third parameter is props nothing but children
    
   // creating div and siblings with h1 tag

//    const header=React.createElement("div",{id : "parent"},React.createElement("div",{id : "child"},
//    [ React.createElement("h1",{id : "heading"},"i amin h1 tag"),
//     React.createElement("h2",{id : "heading1"},"i amin h2 tag world")]
// ));
   

    // const he=  document.createElement("h1");
    // he.innerHTML="hello world from java script !";
    // const root=document.getElementById("root");
    // root.appendChild(he);
