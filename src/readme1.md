* the packages that we have installed

        yarn add node-sass


*  you can skip the return part by doing following

        import React from "react";

        const HomePage = () => (    
            <div>
                
            </div>
        );

        export default HomePage;


* you can address the props parameter into brackets ( props ) or you can directly destructure it ({ value1,val2,.... }) 

        const MenuItem = ( {v1,v2,.. } ) => (
            <div>
            </div>
        );


* for class component you can import the react by two ways

        import React, { Component } from "react";
        class -- extends Component {
                
        }

        or 

        import React from React;
        class -- extends React.Component {

        }

* installing react routing library

        yarn add react-router-dom

* if you get an issue after installing the router dom you can use the following method 

        error:
        "babel-jest": "24.7.1"                 ... 24.7.1 is the version of the babel-jest

        solution :
        you just have to change the version manually
        for this we can add the resolution property inside the package.json
        and set the babel-jest version you want 
        and reinstall the packages by yarn install or npm install

* route has the three important properties 

        path            you can set the path here where the component you provide to the component will be render here 
        
        component       here you can set the component name you want to render
        
        exact           you can change the value of this to false but its true at default
                        if its true then it means path need to be exactly same for component to be render 
                        