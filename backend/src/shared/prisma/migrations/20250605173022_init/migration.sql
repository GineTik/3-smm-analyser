-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfirmationCode" (
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ConfirmationCode_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileUrlFormat" TEXT,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialAccount" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "socialNetworkId" INTEGER NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "socialAccountId" TEXT NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralAnalyticsData" (
    "id" SERIAL NOT NULL,
    "metricCollectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataType" TEXT NOT NULL,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,
    "socialAccountId" INTEGER NOT NULL,

    CONSTRAINT "GeneralAnalyticsData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookAnalyticsPost" (
    "id" SERIAL NOT NULL,
    "postId" TEXT NOT NULL,
    "postContent" TEXT,
    "postType" TEXT,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "shareCount" INTEGER NOT NULL DEFAULT 0,
    "coverageOrganic" INTEGER DEFAULT 0,
    "coveragePaid" INTEGER DEFAULT 0,
    "postClickCount" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "generalAnalyticsId" INTEGER NOT NULL,

    CONSTRAINT "FacebookAnalyticsPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterAnalyticsTweet" (
    "id" SERIAL NOT NULL,
    "tweetId" TEXT NOT NULL,
    "tweetContent" TEXT,
    "retweetsCount" INTEGER NOT NULL DEFAULT 0,
    "quoteCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "viewCount" INTEGER DEFAULT 0,
    "hashtags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "generalAnalyticsId" INTEGER NOT NULL,

    CONSTRAINT "TwitterAnalyticsTweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstagramAnalyticsPost" (
    "id" SERIAL NOT NULL,
    "postId" TEXT NOT NULL,
    "postContent" TEXT,
    "postType" TEXT,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "saveCount" INTEGER DEFAULT 0,
    "reach" INTEGER DEFAULT 0,
    "impressions" INTEGER DEFAULT 0,
    "engagementRate" DOUBLE PRECISION,
    "videoViews" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "generalAnalyticsId" INTEGER NOT NULL,

    CONSTRAINT "InstagramAnalyticsPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationCode_userId_key" ON "ConfirmationCode"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialNetwork_name_key" ON "SocialNetwork"("name");

-- CreateIndex
CREATE INDEX "SocialAccount_socialAccountId_idx" ON "SocialAccount"("socialAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialAccount_userId_socialNetworkId_key" ON "SocialAccount"("userId", "socialNetworkId");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookAnalyticsPost_postId_key" ON "FacebookAnalyticsPost"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookAnalyticsPost_generalAnalyticsId_key" ON "FacebookAnalyticsPost"("generalAnalyticsId");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterAnalyticsTweet_tweetId_key" ON "TwitterAnalyticsTweet"("tweetId");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterAnalyticsTweet_generalAnalyticsId_key" ON "TwitterAnalyticsTweet"("generalAnalyticsId");

-- CreateIndex
CREATE UNIQUE INDEX "InstagramAnalyticsPost_postId_key" ON "InstagramAnalyticsPost"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "InstagramAnalyticsPost_generalAnalyticsId_key" ON "InstagramAnalyticsPost"("generalAnalyticsId");

-- AddForeignKey
ALTER TABLE "ConfirmationCode" ADD CONSTRAINT "ConfirmationCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD CONSTRAINT "SocialAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD CONSTRAINT "SocialAccount_socialNetworkId_fkey" FOREIGN KEY ("socialNetworkId") REFERENCES "SocialNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralAnalyticsData" ADD CONSTRAINT "GeneralAnalyticsData_socialAccountId_fkey" FOREIGN KEY ("socialAccountId") REFERENCES "SocialAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookAnalyticsPost" ADD CONSTRAINT "FacebookAnalyticsPost_generalAnalyticsId_fkey" FOREIGN KEY ("generalAnalyticsId") REFERENCES "GeneralAnalyticsData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterAnalyticsTweet" ADD CONSTRAINT "TwitterAnalyticsTweet_generalAnalyticsId_fkey" FOREIGN KEY ("generalAnalyticsId") REFERENCES "GeneralAnalyticsData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstagramAnalyticsPost" ADD CONSTRAINT "InstagramAnalyticsPost_generalAnalyticsId_fkey" FOREIGN KEY ("generalAnalyticsId") REFERENCES "GeneralAnalyticsData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
