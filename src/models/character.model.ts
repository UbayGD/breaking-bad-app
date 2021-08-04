import { IsArray, IsNumber, IsString } from "class-validator";

export class CharacterModel {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    birthday: string;

    @IsArray()
    occupation: string[];

    @IsString()
    img: string;

    @IsString()
    status: string;

    @IsString()
    nickname: string;

    @IsArray()
    appearance: number[];

    @IsString()
    portrayed: string;
}