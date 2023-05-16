import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import CardDropdownMenu from "@/components/CardDropdownMenu";
import { redirect } from "next/navigation";
import Link from "next/link";

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
                <div className="h-3/4 bg-gray-300 justify-center align-middle">
                    <p className="text-2xl text-center align-middle">
                        {equation}
                    </p>
                </div>
                {/* Body */}
                <div className="h-1/4 w-full flex flex-row justify-between items-center p-2">
                    <p className="text-lg">{name}</p>
                    <CardDropdownMenu />
                </div>
            </Link>
        </div>
    );
};
