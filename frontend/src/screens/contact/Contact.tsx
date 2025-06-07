import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { primary } from "../../utils";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import { useState, type ChangeEvent } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface CONTACTFORM_TYPES {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [contactForm, setcontactForm] = useState<CONTACTFORM_TYPES>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      const res = await axios.post(
        "https://portfolio-dcwm.onrender.com/contact-form/create",
        contactForm
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
      if (!res.data.success) toast.error(res.data.message);

      setisLoading(false);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      setisLoading(false);
    }
  };

  return (
    <div>
      <Link to={"/"}>
        <div className="p-3 text-xl cursor-pointer  bg-[#E6FF00] w-min my-3 text-black rounded-full ">
          <FaArrowLeft />{" "}
        </div>
      </Link>

      <div className="mt-14">
        <p
          style={{ borderColor: primary }}
          className="border-b-3 text-xl inline font-semibold "
        >
          Contact Me
        </p>
        <p className="italic  mt-4">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="flex w-full justify-center "></div>
      </div>

      {/* form  */}
      <div className="flex justify-center mt-14 w-full">
        <div className="w-[600px] ">
          <p
            style={{ borderColor: primary }}
            className="border-b-3 text-center w-full text-xl  font-semibold "
          >
            Contact Form
          </p>

          <div className="flex flex-wrap">
            <InputField
              onChange={(e) =>
                setcontactForm((p) => ({ ...p, name: e.target.value }))
              }
              placeholder="Enter your name"
              title="Name"
              type="text"
              value={contactForm.name}
            />
            <InputField
              onChange={(e) =>
                setcontactForm((p) => ({ ...p, email: e.target.value }))
              }
              placeholder="Enter your email"
              title="Email"
              type="email"
              value={contactForm.email}
            />
            {/* message  */}
            <div className="p-2 mt-4 w-2/2">
              <label className="block text-sm text-gray-300" htmlFor="message">
                Message:
              </label>
              <textarea
                onChange={(e) =>
                  setcontactForm((p) => ({ ...p, message: e.target.value }))
                }
                value={contactForm.message}
                rows={5}
                className="mt-1 outline-none border-b-2 focus:border-[#E6FF00]  w-full"
                placeholder={"Enter your message"}
                name={"message"}
                id={"message"}
              />
              <CustomButton
                className=" mt-4"
                isLoading={isLoading}
                setisLoading={setisLoading}
                onClick={() => {
                  handleSubmit();
                }}
                title="Submit"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

interface INPUTFIELD_TYPE {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

const InputField: React.FC<INPUTFIELD_TYPE> = (props) => {
  return (
    <>
      <div className="p-2 mt-4 w-1/2">
        <label className="block text-sm text-gray-300" htmlFor={props.title}>
          {props?.title}:
        </label>
        <input
          className="mt-1 outline-none border-b-2 focus:border-[#E6FF00]  w-full"
          placeholder={props.placeholder}
          onChange={props.onChange}
          type={props.type}
          value={props.value}
          name={props.title}
          id={props.title}
        />
      </div>
    </>
  );
};
