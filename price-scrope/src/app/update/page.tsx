import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Update = () => {
    return (
        <div>
            <div className="uppercase relative pl-2">
                <div className="h-full absolute w-2 -left-2 bg-white/30"></div>
                <p className="font-extrabold font-mono text-3xl text-white">recent version update</p>
                <p className="font-mono text-2xl text-white/60">Check out our latest updates and version changes to see improvements, bug fixes, and newly added features.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
            </div>

        </div>
    );
};

export default Update;

const UpdateCard = () => {
    return (
        <div className="bg-white/3 p-2 rounded-md border border-white/10">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="size-12 bg-white/10 rounded-xl text-white text-2xl flex items-center justify-center"><FaCheck /></div>
                    <div>
                        <p className="text-white">Version 2.01</p>
                        <p className="text-xs text-white/50">Dec 20, 2025</p>
                    </div>
                </div>
                <Link href={"/update/2"} className="bg-white/20 p-1 px-3 text-sm rounded-md cursor-pointer">View Details</Link>
            </div>

            <p className="text-white/60 line-clamp-5 mt-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae consequatur eos neque, expedita facere excepturi eius aliquam fuga modi labore et nulla natus obcaecati tenetur? Animi deserunt quibusdam consequuntur adipisci beatae ratione exercitationem? Temporibus ut sunt consequatur libero! Quam dolorem eveniet nesciunt eius atque. Pariatur impedit officiis adipisci perspiciatis magnam?</p>
        </div>
    )
}