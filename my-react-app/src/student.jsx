import PropTypes from './student';

function Student (props) {
    return (
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}
// Student.prototype = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudet: PropTypes.bool,
// }

export default Student;