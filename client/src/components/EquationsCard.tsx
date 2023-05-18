import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import CardDropdownMenu from "@/components/CardDropdownMenu";
import { redirect } from "next/navigation";
import Link from "next/link";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";


export interface EquationsCardProps {
    id: string;
    name: string;
    equation: string;
}

export const EquationsCard = ({ id, name, equation }: EquationsCardProps) => {
    // when the card is clicked, redirect to /equation/[id]
    return (
        <div className=" h-100 w-full border hover:drop-shadow-lg">
            {/* Header image */}

            <Link href={`/equation/${id}`}>
                <div className="h-3/4 bg-gray-300 pt-11">
                    <BlockMath math={equation} /> 

                </div>
                {/* Body */}
                <div className="w-full flex flex-row pl-5 place-content-between px-2">
                    <p className="text-lg">{name}</p>
                    <CardDropdownMenu />
                </div>
            </Link>
        </div>
    );
};
