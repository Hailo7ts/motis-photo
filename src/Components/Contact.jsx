import { useEffect, useState } from "react";

const Contact = () =>{
  /*const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState("");   
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); 

  function submit(e) {
    
    // This will prevent page refresh
    e.preventDefault(); 

    // replace this with your own unique endpoint URL
    fetch("#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name: name, email: email, subject: subject, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  } 
  if (error) {
    return <p>{error}</p>;
  } 
  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }*/


    return(
        <>
          <div className="bg-[#181818] w-4/5 my-10 p-5 mx-auto rounded-lg flex justify-center ">                  


                <div className="w-full" netlify>
                  <h1 className="text-5xl font-bold text-center">Contact Me</h1> 
                  <div className="card-body">
                    <fieldset className="fieldset ">
                      <label className="label">Name</label>
                      <input 
                        type="text" 
                        className="input w-full" 
                        placeholder="Name" 
                        
                        />

                      <label className="label">Email</label>
                      <input 
                        type="email" 
                        className="input w-full" 
                        placeholder="Email" 
                        />
                      <label className="label">Subject</label>
                      <input 
                        type="text" 
                        className="input w-full" 
                        placeholder="Subject" 
                        />
                      <label className="label">Message</label>
                      <input 
                        type="text" 
                        className="input w-full" 
                        placeholder="Message" 
                        />
                      <button type="submit" className="btn btn-neutral mt-15 sm:mt-4">Submit</button>
                    </fieldset>
                  </div>
                </div>

          </div>
        </>
    )
}

export default Contact