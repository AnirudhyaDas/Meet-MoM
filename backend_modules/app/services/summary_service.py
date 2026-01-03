def generate_summary(transcript: str):
    prompt = f"""
    Generate Minutes of Meeting with:
    - Summary
    - Key Points
    - Decisions
    - Action Items

    Transcript:
    {transcript}
    """

    # Call your LLM here
    return {
        "summary": "Generated summary here",
        "decisions": [],
        "actions": []
    }
