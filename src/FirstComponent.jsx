// what is a react component?
// it can be as simple as a function returning JSX

const FirstComponent = (props) => {
    console.log('FIRSTCOMPONENT PROPS', props)
    console.log(props.titleText)
    return <h1 className={props.myClass}>{props.titleText ? props.titleText : 'default text'}</h1>
}

// the props parameter is always going to be an object
// the props the component is receiving from its PARENT are going to be the content of this object

export default FirstComponent