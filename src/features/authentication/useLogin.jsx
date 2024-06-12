import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log('useLogin data', data);
      const user = data.user;
      if (user) {
        queryClient.setQueryData(['user_42'], user);
        navigate('/dashboard', { replace: true });
      } else {
        console.error('User not found in response data');
        toast.error('User information is missing from response');
      }
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
};
