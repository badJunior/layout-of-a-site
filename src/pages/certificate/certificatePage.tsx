import Button from "../../components/button";

export default function CertificatePage() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="grid grid-rows-[1fr,70%,1fr] items-center justify-center h-full">
                <div className="grid grid-cols-[1fr,auto,1fr] justify-center items-center">
                    <h1 className=" font-bold text-3xl p-4 ">Cертификаты</h1>
                    <Button caption="скачать" onClick={() => { console.log("нажал") }} />
                </div>
                <div className="grid grid-cols-[1fr,auto,1fr]  ">
                    <img className="" src="/scoolBoy.jpg " />
                    <img className=" " src="/certificate.jpg " />
                    <div></div>
                </div>
                <div className="flex flex-row p-4">
                    <span className="font-bold ">Поделиться</span>
                    <img className="  " src="/socialsColor.jpg ">
                    </img>
                </div>
            </div>
        </div>
    )
}