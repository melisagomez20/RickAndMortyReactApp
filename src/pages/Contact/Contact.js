import Navegation from "../../components/Navagation"

export default function Contact(){
    return(
        <div>
            <Navegation hoja="Contact"/>
            <main className="bg-primary m-5 text-white p-5">
                <h1 className="text-white">Contact</h1>
                    <p>Leave us your information so we can contact you</p>
                <form action="creo usuario en formspree y pego el link si quiero...">
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <input className="btn btn-success" type="submit" value="Send"/>
                </form>
            </main>
        </div>
        
    )
}

//pasamos la prop "hoja" al componente Navegation