from fastapi import APIRouter

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.get("/")
def documents():
    return {
        "message": "Document endpoint coming soon."
    }