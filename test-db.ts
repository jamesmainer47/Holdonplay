import { connectDB } from "@/lib/db";

async function test(){
    const db = await connectDB();
    const [rows] = await db.execute('SELECT NOW()');
    console.log(rows);
}

test();