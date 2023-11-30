import  Express  from "express"
import { createGame, findOneGameByID, updateGameFinishedAt, deleteGame, findAllGames } from "../controlles/playerController.js"

const router = Express.Router()

router.post("/create/newGame", createGame)
router.get("/read/findOneGameByID/:GameID", findOneGameByID)
router.get("/read/findAll", findAllGames)
router.patch("/update/finishGame/:GameID", updateGameFinishedAt)
router.delete("/delete/:GameID", deleteGame)

export default router
