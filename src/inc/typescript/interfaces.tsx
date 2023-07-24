export interface SearchResultProps {
    handleItemClick: (fn: HandleEstablishmentClickFunction) => void;
    onOpen: () => void;
    establishment_id: number;
    inspection_id: number;
    name: string;
    score: number;
    grade?: "A" | "C";
    date: Date;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface SearchResultResponse {
    EstablishmentID: number;
    InspectionID: number;
    EstablishmentName: string;
    score: number;
    Grade?: "A" | "C";
    InspectionDate: Date;
    Address: string;
    City: string;
    State: string;
    Zip: string;
}

export interface SearchResultsProps {
    items: SearchResultProps[];
}

export interface HandleEstablishmentClickFunction {
    itemEstablishmentId: number;
    itemInspectionId: number;
    itemName: string;
}

export interface GAEventViewEstablishmentDetails {
    establishment_id: number;
    inspection_id: number;
    establishment_name: string;
}
