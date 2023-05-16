import { CreateEquationCard } from "@/components/CreateEquationCard";
import { EquationsCard } from "@/components/EquationsCard";
import { EQUATIONS_BY_USER_ID } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";
import Home from "@/layout/home";
import { useEffect } from "react";
import { Equation } from '@/graphql/models/Equation';

export default function Dashboard() {
    const {data, loading} = useQuery(EQUATIONS_BY_USER_ID, {
		variables: {
			id: 1
		}
	});


    return (
        <div className="flex flex-col p-5 border h-full">
            {/* Header */}
            <div className="flex justify-between w-full">
                <div className="flex flex-row gap-x-2 w-full">
                    <input
                        className="rounded-md border border-gray-300 p-1 w-full"
                        type="text"
                        autoComplete="off"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-4 gap-4 flex-wrap mt-5 w-full">
                {data?.equationsByUserId.map((equation: Equation) => (
                    <EquationsCard
                        key={equation.id}
                        id={equation.id}
                        name={equation.name}
                        equation={equation.equation}
                    />
                ))}
                <CreateEquationCard />
            </div>
        </div>
    );
}

Dashboard.PageLayout = Home;
