import React, { useState } from "react";
import axios from "axios";
const Message = () => {
  const [phone, setPhone] = useState("");
  const sendMessage = async () => {
    if (phone.length !== 10) {
      alert("Enter 10 digit valid number");
      return;
    }
    const data = {
      event: "message",
      user: {
        mobile: phone,
      },
      data: {
        user_name: "John Doe",
      },
    };

    try {
      const response = await axios.post(
        "https://api.ravenapp.dev/v1/apps/20dae088-1c8d-4914-b12c-f107c4f47aa3/events/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "AuthKey aEUW15d/ecFfv2Vbr6/ZkPu71ATJ/NOJpdPDGamWeJs=",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Success: ", data);
      } else {
        throw Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="message_comp">
      <div className="mess_input">
        <input
          placeholder="Enter Your Phone Number "
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          value={phone}
          name="phone"
        />
      </div>
      <button onClick={() => sendMessage(phone)} className="message_button">
        Send Message
      </button>
    </div>
  );
};

export default Message;
