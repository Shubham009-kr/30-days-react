import React, { use } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div><h1 className='text-2xl text-center mt-5'>User: {id}</h1>
        <section class="m-10">
	<div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					
                    <img src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470202101_18380496607110052_2973860075936016703_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QH5YoZkwI8GkxVk_-bEKSPULmMbU2WBtUEVFEzxIgfdIuo7X38A2DiMmX7O_xFFOsPfjeBH35prxNvploQ1v1jz&_nc_ohc=ew3uJZLVeJcQ7kNvwGmxiIp&_nc_gid=Vd1_S-tfIuJU7sm68xenFA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzMwOTgyNjA4NTI3NTk2MjcwNA%3D%3D.3-ccb7-5&oh=00_AfEVyoIN6NMtpQBsyoSe1O6b1SOs9nCXxYXbKnzjSqZUag&oe=6806B201&_nc_sid=7a9f4b" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" /> 
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Wines</h3>
				</a>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470170559_18380496370110052_7787005827387128222_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFa608pelWusNb2CHabtftSbMGhZXd7iLCVUCtegBnuXapdAvnuj0Q8S0l5zloG7zuLQ32AHK8tqFIvhApxHqm8&_nc_ohc=F_b2MWN0gosQ7kNvwH3ss0F&_nc_gid=Mtsjr9v7dIYv-a-aHLHOUQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzMwOTgyNjA4NTA5OTY4MzUyNw%3D%3D.3-ccb7-5&oh=00_AfHfA68wmiC3Csb6NMqRJF9N-6L1DmZZtGZJz46Iy3DXeA&oe=6806FA41&_nc_sid=7a9f4b" alt="" className="absolute object-cover inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out" />
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
				</a>
				<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470196390_18380496376110052_1134489116267978582_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGn74naegzYfMG-MZvYdCgAfqCuES3_we0Jmgb0C7Y-F1hFmYQ95fgFa2PVPEoDKSgE5jcqpsQReCmAsO6NVBeH&_nc_ohc=TsJ-FwU7Bo0Q7kNvwFjYN7N&_nc_gid=fKpB8mKO0SAQHuEwkctUpg&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwOTgyNjA4NTEwODI3ODA0NA%3D%3D.3-ccb7-5&oh=00_AfHAJt3o8r49z8Ah0xA_vk5Bfbb2j4HdtzMwSD0mhpT5Iw&oe=6806EB5A&_nc_sid=10d13b" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
					</a>
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470170559_18380496370110052_7787005827387128222_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFa608pelWusNb2CHabtftSbMGhZXd7iLCVUCtegBnuXapdAvnuj0Q8S0l5zloG7zuLQ32AHK8tqFIvhApxHqm8&_nc_ohc=F_b2MWN0gosQ7kNvwH3ss0F&_nc_gid=Mtsjr9v7dIYv-a-aHLHOUQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzMwOTgyNjA4NTA5OTY4MzUyNw%3D%3D.3-ccb7-5&oh=00_AfHfA68wmiC3Csb6NMqRJF9N-6L1DmZZtGZJz46Iy3DXeA&oe=6806FA41&_nc_sid=7a9f4b" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
					</a>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470209206_18380496403110052_887862617218952577_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFa608pelWusNb2CHabtftSbMGhZXd7iLCVUCtegBnuXapdAvnuj0Q8S0l5zloG7zuLQ32AHK8tqFIvhApxHqm8&_nc_ohc=6mgn_G9h7dUQ7kNvwFZIReo&_nc_gid=Mtsjr9v7dIYv-a-aHLHOUQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzMwOTgyNjA4NTA5OTc0MzMzMg%3D%3D.3-ccb7-5&oh=00_AfGeEyQMsKWj7b7iZlKwJqwtHUBd70G_aJfMSoj3y0Ou_w&oe=6806E49C&_nc_sid=7a9f4b" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
				</a>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default User