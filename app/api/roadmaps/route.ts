import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      skill,
      current_level,
      goal,
      daily_study_time,
      target_timeline,
      roadmap_content,
    } = body;

    if (
      !skill ||
      !current_level ||
      !goal ||
      !daily_study_time ||
      !target_timeline ||
      !roadmap_content
    ) {
      return NextResponse.json(
        { error: "All roadmap fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("roadmaps")
      .insert([
        {
          skill,
          current_level,
          goal,
          daily_study_time,
          target_timeline,
          roadmap_content,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error.message);

      return NextResponse.json(
        { error: "Unable to save the roadmap." },
        { status: 500 }
      );
    }

    return NextResponse.json({ roadmap: data }, { status: 201 });
  } catch (error) {
    console.error("Roadmap API error:", error);

    return NextResponse.json(
      { error: "Invalid request or server error." },
      { status: 400 }
    );
  }
}