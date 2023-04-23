import PropTypes from "prop-types"

export const Person = (props) =>{
 return (
    <div>
        <h1></h1>
        <h1>Name :{props.name}</h1>
        <h1>Email:{props.email}</h1>
        <h1>Age:{props.age}</h1>
        <h1>this person {props.isMarried ? "is" : "is not"} Married</h1>
        {props.friend.map((friend)=>{
            <h1>{friend}</h1>
        })}
    </div>
 )
};


// Person.PropTypes=
//   {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     age:PropTypes.number,
//     isMarried:PropTypes.bool,//means boolean
//     friend:PropTypes.arrayOf(PropTypes.string)//means that the array must have values of  the type string
// };