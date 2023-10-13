import ReactDOM from 'react-dom';

// import ReactJs components
import App from '../components/app.jsx';


/*
* create React root element and insert it into document
*/
const bootstrapReact = () =>
ReactDOM.render(
  <App />,
  document.getElementById('insertReactHere')
);
//{
   //const root = createRoot(document.getElementById('insertReactHere'));  // parent for created element = "insertion point"

//    const component = <App />;
//
//    root.render(component);
// }


window.addEventListener('DOMContentLoaded', bootstrapReact);
