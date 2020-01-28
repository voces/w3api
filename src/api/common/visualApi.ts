import { wrapGame } from "../../Game";

// ============================================================================
// Visual API
export const SetTerrainFog = ( a: number, b: number, c: number, d: number, e: number ): void => {};

export const ResetTerrainFog = (): void => {};

export const SetUnitFog = ( a: number, b: number, c: number, d: number, e: number ): void => {};

export const SetTerrainFogEx = ( style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number ): void => {};

export const DisplayTextToPlayer = ( toPlayer: player, x: number, y: number, message: string ): void => {};

export const DisplayTimedTextToPlayer = wrapGame( (
	game,
	toPlayer: player,
	x: number,
	y: number,
	duration: number,
	message: string,
): void => {

	game.log.push( { to: toPlayer, message } );

} );

export const DisplayTimedTextFromPlayer = ( toPlayer: player, x: number, y: number, duration: number, message: string ): void => {};

export const ClearTextMessages = (): void => {};

export const SetDayNightModels = ( terrainDNCFile: string, unitDNCFile: string ): void => {};

export const SetSkyModel = ( skyModelFile: string ): void => {};

export const EnableUserControl = ( b: boolean ): void => {};

export const EnableUserUI = ( b: boolean ): void => {};

export const SuspendTimeOfDay = ( b: boolean ): void => {};

export const SetTimeOfDayScale = ( r: number ): void => {};

export const GetTimeOfDayScale = (): number => {};

export const ShowInterface = ( flag: boolean, fadeDuration: number ): void => {};

export const PauseGame = ( flag: boolean ): void => {};

export const UnitAddIndicator = ( whichUnit: unit, red: number, green: number, blue: number, alpha: number ): void => {};

export const AddIndicator = ( whichWidget: widget, red: number, green: number, blue: number, alpha: number ): void => {};

export const PingMinimap = ( x: number, y: number, duration: number ): void => {};

export const PingMinimapEx = ( x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean ): void => {};

export const EnableOcclusion = ( flag: boolean ): void => {};

export const SetIntroShotText = ( introText: string ): void => {};

export const SetIntroShotModel = ( introModelPath: string ): void => {};

export const EnableWorldFogBoundary = ( b: boolean ): void => {};

export const PlayModelCinematic = ( modelName: string ): void => {};

export const PlayCinematic = ( movieName: string ): void => {};

export const ForceUIKey = ( key: string ): void => {};

export const ForceUICancel = (): void => {};

export const DisplayLoadDialog = (): void => {};

export const SetAltMinimapIcon = ( iconPath: string ): void => {};

export const DisableRestartMission = ( flag: boolean ): void => {};

export const CreateTextTag = (): texttag => {};

export const DestroyTextTag = ( t: texttag ): void => {};

export const SetTextTagText = ( t: texttag, s: string, height: number ): void => {};

export const SetTextTagPos = ( t: texttag, x: number, y: number, heightOffset: number ): void => {};

export const SetTextTagPosUnit = ( t: texttag, whichUnit: unit, heightOffset: number ): void => {};

export const SetTextTagColor = ( t: texttag, red: number, green: number, blue: number, alpha: number ): void => {};

export const SetTextTagVelocity = ( t: texttag, xvel: number, yvel: number ): void => {};

export const SetTextTagVisibility = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagSuspended = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagPermanent = ( t: texttag, flag: boolean ): void => {};

export const SetTextTagAge = ( t: texttag, age: number ): void => {};

export const SetTextTagLifespan = ( t: texttag, lifespan: number ): void => {};

export const SetTextTagFadepoint = ( t: texttag, fadepoint: number ): void => {};

export const SetReservedLocalHeroButtons = ( reserved: number ): void => {};

export const GetAllyColorFilterState = (): number => {};

export const SetAllyColorFilterState = ( state: number ): void => {};

export const GetCreepCampFilterState = (): boolean => {};

export const SetCreepCampFilterState = ( state: boolean ): void => {};

export const EnableMinimapFilterButtons = ( enableAlly: boolean, enableCreep: boolean ): void => {};

export const EnableDragSelect = ( state: boolean, ui: boolean ): void => {};

export const EnablePreSelect = ( state: boolean, ui: boolean ): void => {};

export const EnableSelect = ( state: boolean, ui: boolean ): void => {};
