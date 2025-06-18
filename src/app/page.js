import { Team } from "@/mocks/team";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="bg-altern rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto text-foreground">
        <h2 className="text-4xl font-extrabold text-details mb-6 tracking-wide">
          Un poco sobre la competencia...
        </h2>
        <div className="space-y-6 text-lg text-details leading-relaxed">
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
      </section>

      <section className="my-12 text-center">
        <h2 className="text-4xl font-bold text-details mb-2 tracking-wide">Los organizadores</h2>
        <p className="text-lg text-foreground mb-8">Ad cupidatat pariatur sunt fugiat irure occaecat.</p>

        <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4`}>
          {Team.map((member) => (
            <li
              key={member.id}
              className="bg-altern p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                alt={member.name}
                src={member.profile_pic}
                width={120}
                height={120}
                className="rounded-full border-4 border-background"
              />
              <p className="text-2xl font-semibold text-details mt-4">{member.name}</p>
              <p className="text-xs italic font-bold text-decorative mt-1">{member.subtitle}</p>
              <p className="text-sm text-details mt-2">{member.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <div>
        <h2>a</h2>
      </div>
    </div>
  );
}
