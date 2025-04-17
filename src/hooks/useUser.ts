import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api";
import { User } from "@/types/types";

export const useUser = () => {
  return useQuery<User>({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    staleTime: 1000 * 60 * 10,
  });
};
