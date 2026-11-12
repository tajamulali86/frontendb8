function ShowSum({ a, b }) {
    let sum = a + b
    return <h2 className="text-6xl text-lead" >Hello world: the sum of {a} and {b} Sum is {sum}</h2>
}


function Heading() {
    return (
        <>
            <h1 className="text-red-500 text-2xl">Hello this is my Sum</h1>
            <ShowSum a={11} b={22} />
            <ShowSum a={123} b={122} />
            <ShowSum a={151} b={212} />
            <ShowSum a={161} b={122} />
            <ShowSum a={115} b={232} />
            <ShowSum a={118} b={222} />
            <ShowSum a={116} b={6822} />
        </>
    )
}

export default Heading