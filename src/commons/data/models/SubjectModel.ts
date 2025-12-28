import { SubjectEntity } from "@/commons/domain/entities/SubjectEntity";

export class SubjectModel {
  id: string;
  name: string;
  description: string;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static fromJSON(json: any): SubjectModel {
    return new SubjectModel(json.id, json.name, json.description);
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }

  toEntity(): SubjectEntity {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
