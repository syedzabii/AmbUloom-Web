import axios from "axios";

const getBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
  if (!envUrl) return "http://localhost:8000/api/v1";
  
  const cleanUrl = envUrl.replace(/\/+$/, "");
  return cleanUrl.endsWith("/api/v1") ? cleanUrl : `${cleanUrl}/api/v1`;
};

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ValidationErrorItem {
  field: string;
  message: string;
}

export interface ApiErrorPayload {
  success?: boolean;
  message?: string;
  errors?: ValidationErrorItem[];
}

export interface ParsedApiError {
  generalError: string | null;
  fieldErrors: Record<string, string>;
}

// Add response interceptor to automatically treat response with success: false as an error
apiClient.interceptors.response.use(
  (response) => {
    if (response.data && typeof response.data === "object" && response.data.success === false) {
      const error: any = new Error(response.data.message || "Request failed");
      error.response = response;
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function parseApiError(error: unknown): ParsedApiError {
  const fieldErrors: Record<string, string> = {};
  let generalError: string | null = null;

  if (axios.isAxiosError(error) && error.response) {
    const data = error.response.data as ApiErrorPayload | undefined;

    if (data && typeof data === "object") {
      // Type B: Multi-Field Validation Response
      if (Array.isArray(data.errors) && data.errors.length > 0) {
        data.errors.forEach((err) => {
          if (err.field && err.message) {
            fieldErrors[err.field] = err.message;
          }
        });
        generalError = data.message || "Validation failed. Please check the highlighted fields.";
      } else if (data.message) {
        // Type A: Single Message Response (e.g. 400, 401, 404, 409, 429, 500)
        generalError = data.message;
      }
    }

    if (!generalError) {
      if (error.response.status === 409) {
        generalError = "An account with these registration details already exists.";
      } else if (error.response.status === 429) {
        generalError = "Too many registration attempts. Please try again later.";
      } else if (error.response.status >= 500) {
        generalError = "Server error. Please try again later.";
      } else {
        generalError = error.message || "Registration failed. Please try again.";
      }
    }
  } else if (error instanceof Error) {
    generalError = error.message;
    // Check if response data is attached to Error
    const errObj = error as any;
    if (errObj.response && errObj.response.data) {
      const data = errObj.response.data as ApiErrorPayload;
      if (Array.isArray(data.errors) && data.errors.length > 0) {
        data.errors.forEach((err) => {
          if (err.field && err.message) {
            fieldErrors[err.field] = err.message;
          }
        });
      }
    }
  } else {
    generalError = "Network connection error. Please check your internet connection.";
  }

  // Extract field-specific errors from general message if not explicitly mapped
  if (generalError) {
    const lowerMsg = generalError.toLowerCase();
    if (lowerMsg.includes("email")) {
      fieldErrors.email = fieldErrors.email || generalError;
    }
    if (lowerMsg.includes("phone") || lowerMsg.includes("mobile") || lowerMsg.includes("number")) {
      fieldErrors.phone = fieldErrors.phone || generalError;
      fieldErrors.phoneNumber = fieldErrors.phoneNumber || generalError;
    }
    if (lowerMsg.includes("name")) {
      fieldErrors.studentName = fieldErrors.studentName || generalError;
      fieldErrors.firstName = fieldErrors.firstName || generalError;
      fieldErrors.lastName = fieldErrors.lastName || generalError;
    }
  }

  return { generalError, fieldErrors };
}



