import { cookies } from "next/headers";

export default async function Notifications() {
 const response =  await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1')
   const data = await response.json();
    console.log(data)

  await new Promise((resolve) => setTimeout(resolve, 500));
  const session = (await cookies()).get('session')?.value
  return <div>I am a Notifications Slot, I am also dynamic!
    <p>you have... {data[0]} new notifications</p>
  </div>;
}