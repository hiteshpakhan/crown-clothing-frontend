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