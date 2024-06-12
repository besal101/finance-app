import { useOpenAcount } from "@/features/accounts/hooks/use-open-accounts";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  account: string;
  accountId: string;
};

export const AccountColumn = ({ id, account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAcount();

  const onClick = () => {
    onOpenAccount(accountId);
  };

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center hover:underline"
    >
      {account}
    </div>
  );
};
