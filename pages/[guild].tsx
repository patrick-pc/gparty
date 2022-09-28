import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Guild: NextPage = () => {
  const router = useRouter()
  const { guild } = router.query

  return (
    <div className="container mx-auto my-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <img className="h-40 w-40 rounded-full" src="img/guild.png" />
          <h1 className="font-semibold text-3xl mb-2">The Hunter Association</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-[600px] bg-black border border-zinc-800 rounded-md">
          <div className="flex items-center justify-between w-full p-4 gap-4">
            <div className="flex items-center gap-4">
              <img className="h-24 w-24 rounded-md" src="img/dota2.png" />
              <h2 className="font-medium text-lg">Dota 2</h2>
            </div>
            <div className="flex -space-x-4">
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/gon.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/killua.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/hisoka.png" />
              <div className="h-12 w-12 rounded-full ring-4 ring-black bg-zinc-800 flex items-center justify-center">
                <span>+5</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full border-t border-zinc-800 p-4 gap-4">
            <div className="flex items-center gap-4">
              <img className="h-24 w-24 rounded-md" src="img/lol.png" />
              <h2 className="font-medium text-lg">League of Legends</h2>
            </div>
            <div className="flex -space-x-4">
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/gon.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/killua.png" />
            </div>
          </div>

          <div className="flex items-center justify-between w-full border-t border-zinc-800 p-4 gap-4">
            <div className="flex items-center gap-4">
              <img className="h-24 w-24 rounded-md" src="img/valorant.png" />
              <h2 className="font-medium text-lg">Valorant</h2>
            </div>
            <div className="flex -space-x-4">
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/gon.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/kurapika.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/leorio.png" />
              <div className="h-12 w-12 rounded-full ring-4 ring-black bg-zinc-800 flex items-center justify-center">
                <span>+3</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full border-t border-zinc-800 p-4 gap-4">
            <div className="flex items-center gap-4">
              <img className="h-24 w-24 rounded-md" src="img/apex.png" />
              <h2 className="font-medium text-lg">Apex Legends</h2>
            </div>
            <div className="flex -space-x-4">
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/leorio.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/killua.png" />
              <img className="h-12 w-12 rounded-full ring-4 ring-black" src="img/kurapika.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guild
