import Button from "../../components/button";

export default function CertificatePage() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="absolute left-0 font-bold text-3xl p-4 ">Cертификаты</h1>
                    <Button caption="скачать" onClick={() => { console.log("нажал") }} />
                </div>
                <div className="flex flex-row  ">
                    <img className="  absolute left-0 " src="/scoolBoy.jpg ">
                    </img>
                    <img className=" " src="/certificate.jpg ">
                    </img>
                </div>
                <div className="flex flex-row gap-1">
                    <span className="font-bold ">Поделиться</span>
                    <img className="  " src="/socialsColor.jpg ">
                    </img>
                </div>
            </div>

        </div>
    )
}