import React, { useEffect, useState } from "react";

function Acccount() {
    const [info, setInfo] = useState({});
    const [image, setImage] = useState(
        "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-64.png"
    );

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        setInfo(userInfo);
        const imgAcc = localStorage.getItem("img");
        if (imgAcc) {
            setImage(imgAcc);
        } else {
            setImage(
                "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-64.png"
            );
        }
    }, []);

    const handleTakeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imgAcc = reader.result;
                setImage(imgAcc);
                localStorage.setItem("img", imgAcc);
            };
            reader.readAsDataURL(file);
        }
    };
    function handleClick() {
        document.querySelector(".display").click();
    }
    function onDelImg(e) {
        e.preventDefault();
        const prevImg =
            "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-64.png";
        setImage(prevImg);
        localStorage.setItem("img", prevImg);
    }

    return (
        <div>
            <div className="container">
                <div className="">Account Settings</div>
                {info ? (
                    <>
                        <div className="w-[600px] p-3 bg-slate-200 mt-4 rounded-md flex gap-5">
                            <div className="gap-3 text-center justify-left">
                                <div className=" w-[150px] h-[150px] mb-4 border-2 text-center border-black rounded-[50%]">
                                    <img 
                                        src={image}
                                        className="w-full object-cover rounded-[50%] h-full"
                                        width={150}
                                        height={150}
                                        alt="img"
                                    />
                                </div>
                                <div className="flex gap-3 mb-4">
                                    <div
                                        className="inline-block p-1 text-white bg-black border-2 border-black rounded-md active:scale-95"
                                        onClick={handleClick}
                                    >
                                        Change Icon
                                    </div>
                                    <button
                                        className="inline-block p-1 text-white bg-black border-2 border-black rounded-md active:scale-95"
                                        onClick={onDelImg}
                                    >
                                        Delete icon
                                    </button>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleTakeImage}
                                    placeholder=""
                                    className="hidden display"
                                />
                            </div>
                            <div className="flex-col">
                                <div className="flex items-center gap-3">
                                    <h1>username: </h1>
                                    <h1 className="text-[20px] font-bold">
                                        {info.username}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h1>email: </h1>
                                    <h1 className="text-[20px] font-bold">
                                        {info.email}
                                    </h1>
                                </div>
                                
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>No Account</h1>
                )}
            </div>
        </div>
    );
}

export default Acccount;
