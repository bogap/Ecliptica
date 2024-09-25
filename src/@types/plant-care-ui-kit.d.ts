declare module 'plant-care-ui-kit' {
    import { FC, ReactNode } from 'react';

    export const PlantCard: FC<{ name: string; imageUrl: string }>;
    export const GreenButton: FC<{ children: ReactNode }>;
    export const Grid: FC<{ children: ReactNode }>;
    export const Text: FC<{ children: ReactNode }>;
    export const PlantSearch: FC<{ children: ReactNode }>;
}