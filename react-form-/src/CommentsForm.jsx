import { useState } from "react"

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            };
        });
    };
    let handleSubmit =(evemt) =>{
        event.preventDefault();
    }
    return (

        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username  </label>
                <input placeholder="username"
                    type="text"
                    value={formData.username} 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />

                <br /> <br />

                <label htmlFor="remarks">Remarks    </label>
                <textarea
                    placeholder="add few remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    id="remarks"
                    name="remarks">
                    Remarks
                </textarea>

                <br /> <br />
                
                <label htmlFor="rating">Rating  </label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating} 
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />

                <br /> <br />
                <button type="submit">Add Comments</button>
            </form>

        </div>
    )
}