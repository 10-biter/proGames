namespace proGames {
    // color=#400080 icon="\uf005"

    export function setPlatformerModeOn(sprite:Sprite): void {
        sprite.ay = (500)
        scene.cameraFollowSprite(sprite)
        controller.moveSprite(sprite, 100, 0)


        controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
            sprite.vy = (200)
        })
    }
}
