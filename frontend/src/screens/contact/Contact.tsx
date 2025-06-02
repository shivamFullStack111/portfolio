import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { primary } from "../../utils";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";

const Contact = () => {
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
      {/* <div className="w-full  flex flex-wrap items-center">
        <div className="flex  items-center w-1/2 mt-6 gap-4">
          <p>
            <FaWhatsapp color={primary} />
          </p>
          <p>+91 9464046810</p>
        </div>
        <div className="flex  items-center w-1/2 mt-6 gap-4">
          <p>
            <SiMaildotru color={primary} />
          </p>
          <p>shvam12340987@gmail.com</p>
        </div>
      </div> */}

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
              onChange={() => {}}
              placeholder="Enter your name"
              title="Name"
              type="text"
              value=""
            />
            <InputField
              onChange={() => {}}
              placeholder="Enter your email"
              title="Email"
              type="email"
              value=""
            />
            {/* message  */}
            <div className="p-2 mt-4 w-2/2">
              <label className="block text-sm text-gray-300" htmlFor="message">
                Message:
              </label>
              <textarea
                rows={5}
                className="mt-1 outline-none border-b-2 focus:border-[#E6FF00]  w-full"
                placeholder={"Enter your message"}
                name={"message"}
                id={"message"}
              />
              <CustomButton className=" mt-4" onClick={()=>{}} title="Submit" />
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
  onChange: () => void;
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
          type={props.type}
          value={props.value}
          name={props.title}
          id={props.title}
        />
      </div>
    </>
  );
};
