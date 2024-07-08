/* eslint-disable camelcase */
type Address = {
    object?: string;
    id?: string;
    userId?: number;
    modelId?: number;
    modelType?: string;
    apartment?: string;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    state?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    primaryAddress?: boolean;
    status?: number;
    createdAt?: string;
    updatedAt?: string;
};
type LatLng = google.maps.LatLngLiteral;
