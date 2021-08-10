import { Exclude } from "class-transformer";
import { IsArray, IsNumber, IsString } from "class-validator";

export class CharacterModel {
    @IsNumber()
    char_id: number;

    @IsString()
    name: string;

    @IsString()
    birthday: string;

    @IsArray()
    private occupation: string[];

    @IsString()
    img: string;

    @IsString()
    status: string;

    @IsString()
    nickname: string;

    @IsArray()
    private appearance: number[];

    @IsString()
    portrayed: string;

    @Exclude()
    get occupations() {
        return this.occupation?.toString();
    }

    @Exclude()
    get appearances() {
        return this.appearance?.toString();
    }
}