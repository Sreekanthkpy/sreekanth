import asyncio
import httpx

async def test():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get("http://localhost:8000/departments/")
            print(f"Status: {response.status_code}")
            print(f"Response: {response.json()}")
        except Exception as e:
            print(f"Error: {e}")

asyncio.run(test())