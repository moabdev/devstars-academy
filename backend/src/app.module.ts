import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { ActivitySubmissionsModule } from './activity-submissions/activity-submissions.module';
import { ActivitiesModule } from './activities/activities.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { TicketMessagesModule } from './ticket-messages/ticket-messages.module';
import { TicketsModule } from './tickets/tickets.module';
import { CoordinatorsModule } from './coordinators/coordinators.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CoursesModule,
    StudentsModule,
    TeachersModule,
    CoordinatorsModule,
    TicketsModule,
    TicketMessagesModule,
    PostsModule,
    CommentsModule,
    ActivitiesModule,
    ActivitySubmissionsModule,
    DocumentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
