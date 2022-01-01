function Test({name}) {
    console.log(Date.now())
    return (
        <div>
            This is a test {name} {}           
        </div>
    )
}

export default Test

export async function getStaticProps(context) {
    
    
    let name = Date.now()
    return {
      props: {name}, // will be passed to the page component as props
    }
  }