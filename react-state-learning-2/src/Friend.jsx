import { useState } from "react";

function Friend() {
    const [friends, setFriends] = useState([
        "Fahim",
        "Alex",
        "Shahid"
    ]);

    return (
        <div>
            <h2>My Friends</h2>

            <ul>
                {friends.map((friend) => (
                    <li key={friend}>{friend}</li>
                ))}
            </ul>

            <button onClick={() => setFriends([...friends, "Rahul"])}>
                Add Friend
            </button>

            <button
                onClick={() =>
                    setFriends(
                        friends.filter((friend) => friend !== "Rahul")
                    )
                }
            >
                Remove Rahul
            </button>

            <button
                onClick={() =>
                    setFriends(
                        friends.map((friend) =>
                            friend === "Fahim" ? "Md Fahim" : friend
                        )
                    )
                }
            >
                Update Friend
            </button>
        </div>
    );
}

export default Friend;