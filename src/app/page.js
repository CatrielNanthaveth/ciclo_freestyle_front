import { Team } from "@/mocks/team";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h2 className="text-2xl text-details">Un poco sobre la competencia...</h2>
        <p>
          Eiusmod ipsum in do esse aliqua ex officia aliqua excepteur dolore. Incididunt magna esse ipsum labore dolore sit id minim fugiat exercitation eu pariatur. Commodo minim exercitation enim qui culpa. Do eu deserunt tempor eu cillum.
        </p>
        <p>
          Sunt reprehenderit id reprehenderit esse. Et enim ipsum non officia do sit quis aliquip commodo irure. Nisi nisi ea velit nulla amet deserunt amet dolor et nisi enim voluptate eu dolore. Consequat labore ex eu fugiat magna. Nulla ad exercitation dolore officia excepteur anim exercitation duis. Velit occaecat ipsum dolor aute deserunt nostrud exercitation aliqua.
        </p>
        <p>
          Duis mollit exercitation pariatur dolor consequat laborum laboris commodo aliqua. Quis aute qui proident ad pariatur commodo deserunt. Incididunt voluptate eiusmod est reprehenderit in minim esse amet non. Qui dolore nulla reprehenderit velit exercitation quis non veniam quis eiusmod aute. Reprehenderit magna tempor commodo laboris Lorem.
        </p>

      </div>
      <div>
        <h2>Los organizadores</h2>
        <p>Ad cupidatat pariatur sunt fugiat irure occaecat.</p>

        <ul>
          {Team.map((member) => (
          <li key={member.id} className="p-4 bg-altern rounded shadow">
            <Image 
            alt={member.name}
            src={member.profile_pic}
            width={40}
            height={40}
            /> 
            <p className="text-xl">{member.name}</p>
            <p>{member.description}</p>
          </li>
        ))}
        </ul>
      </div>
      <div>
        <h2>a</h2>
      </div>
    </div>
  );
}
