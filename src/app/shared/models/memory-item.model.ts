import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface MemoryTile {
    icon: IconName;
    status: MemoryTileStatus;
}

export enum MemoryTileStatus {
    OPEN,
    CLOSED,
    MATCHED
}