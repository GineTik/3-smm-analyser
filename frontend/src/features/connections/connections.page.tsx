import { ConnectionsList } from "./connections-list";

export function ConnectionsPage() {
  return (
    <div className="flex flex-col gap-2 max-w-[800px] w-full mx-auto mt-10">
      <h1>З&apos;єднання</h1>
      <p className="text-sm text-muted-foreground max-w-2/3">
        Підключіть свої акаунти соц. мереж, щоб отримати потужну аналітику
        вашого контента. Ви можете підключити більше одного акаунту.
      </p>
      <div className="mt-4">
        <ConnectionsList />
      </div>
    </div>
  );
}
